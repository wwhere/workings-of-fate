//region Formatters

rivets.formatters.locale = function(value){
    return jsrpg.locale.l(value);
};

rivets.formatters.number = {
    read: function(value) {
        return value;
    },
    publish: function(value) {
        return parseInt(value);
    }
};

//endregion Formatters

//region Binders


//endregion Binders

//region Adapters



//endregion Adapters