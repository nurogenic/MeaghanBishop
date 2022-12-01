let data = {
    items: [],
    contacts: []
};

let currentItemsCallback = null;
let currentContactCallback = null;

firebase.initializeApp({
    apiKey: "AIzaSyDlNaEM6C73HhjSVvrXiiJPgD5VMHzQd_M",
    authDomain: "meaghan-bishop.firebaseapp.com",
    databaseURL: "https://meaghan-bishop.firebaseio.com",
    projectId: "meaghan-bishop",
    storageBucket: "meaghan-bishop.appspot.com",
    messagingSenderId: "661045742597"
});

function getItems() {
    return data.items;
}

function getItemsToSave() {
    var toSave = {};

    getItems().forEach(function(item) {
        toSave[item.id] = item;
    });

    return toSave;
}

function setItems(items) {
    data.items = Object.values(items).sort(function(a,b){
        return a.sortOrder - b.sortOrder;
    });
}

function getItem(id) {
    return getItems().filter(x=>x.id == id).shift();
}

function getNextItem(item) {
    var itm = getItem(item.id);
    var items = getItems();
    var index = items.indexOf(itm);
    return index + 1 >= items.length ? items[0] : items[index+1];
}

function getPreviousItem(item) {
    var itm = getItem(item.id);
    var items = getItems();
    var index = items.indexOf(itm);
    return index <= 0 ? items[items.length - 1] : items[index - 1];
}

function getItemByUrlKey(urlKey) {
    return getItems().filter(x=>x.urlKey == urlKey).shift();
}

function setContacts(contacts) {
    data.contacts = contacts;
}

function getContacts() {
    return data.contacts;
}

function postContact(form) {
    var prom = new Promise((res, rej)=>{
        firebase.database().ref('contacts').push(form, function(error) {
            if(error){
                rej(error)
            } else {
                res();
            }
        });
    });
    
    return prom;
}

function deleteContact(id) {
    return firebase.database().ref('contacts/'+id).remove();
}

function setItem(id, item) {
    var prom = new Promise((res, rej)=>{
        firebase.database().ref('work/'+id).update(item, function(error) {
            if(error){
                rej(error)
            } else {
                res(item);
            }
        });
    });
    
    return prom;
}

function addItem(newData) {
    var now = new Date(); 
    var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    newData.id = 'w-'+now_utc.getTime();
    newData.sortOrder = getItems().length;
    return setItem(newData.id, newData);
}

function deleteItem(item) {
    if(confirm(`Are you sure you want to delete ${item.title}?`)){
        return firebase.database().ref('work/'+item.id).remove();
    }
}

function onItemsUpdate(cb) {
    if(getItems().length){
        cb(getItems());
    }
    
    currentItemsCallback = function(snap) {
        setItems(snap.val());
        cb(getItems());
    };

    firebase.database().ref('work').on('value', currentItemsCallback);
}

function offItemsUpdate() {
    firebase.database().ref('work').off('value', currentItemsCallback);
}

function onContactsUpdate(cb) {
    if(data.contacts.length){
        cb(data.contacts);
    }

    let fbRef = firebase.database().ref('contacts');
    currentContactCallback = function(snap) {
        data.contacts = snap.val();
        cb(data.contacts);
    };

    fbRef.on('value', currentContactCallback);
}

function offContactsUpdate() {
    firebase.database().ref('contacts').off('value', currentContactCallback);
}

function moveInArray(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    arr.forEach(function(item, index, arr) {
        item.sortOrder = index;
    });
    return arr; // for testing purposes
}

function updateSortOrder(item, move) {
    var index = getItems().indexOf(getItem(item.id));
    setItems(moveInArray(getItems(), index, index+move));
    firebase.database().ref('work').update(getItemsToSave());

    return this;
}

function validateData(item) {
    var prevItem = item.id ? getItem(item.id) : null;
    if(!item.urlKey){
        return "Please add a url.";
    }

    if(!prevItem && getItems().filter(function(itm) {
        return itm.urlKey === item.urlKey
    })){
        return "Please add a unique url.";
    }

    if(!item.title){
        return "Please add a title.";
    }

    if(!item.thumb){
        return "Please add a thumbnail.";
    }

    return true;
}


export default {
    getItems,
    setItems,
    getItem,
    getItemByUrlKey,
    getNextItem,
    getPreviousItem,
    setItem,
    addItem,
    deleteItem,
    onItemsUpdate,
    offItemsUpdate,
    setContacts,
    getContacts,
    postContact,
    onContactsUpdate,
    offContactsUpdate,
    deleteContact,
    validateData,
    updateSortOrder
}