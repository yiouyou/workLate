// 19
Template.workersList_19.workers_19 = function () {
  return Workers_19.find({}, {sort: {name: 1, time: -1}});
};

var clearValues_19 = function () {
  $('#name_19').val("").focus();
  $('#floor_19').val("");
  $('#phone_19').val("");
  $('#time_19').val("");
}

Template.workersList_19.events({
  'click .add_worker': function () {
    var name  = $('#name_19').val();
    var floor = $('#floor_19').val();
    var phone = $('#phone_19').val();
    var time  = $('#time_19').val();
    if (name) {
      Workers_19.insert({name:name, floor:floor, phone:phone, time:time});
      clearValues_19();
    } else {
      alert("请至少输入您的尊姓大名!");
    }
  },
  'click .rm_worker': function () {
    Workers_19.remove(this._id);
  },
});



// 9
Template.workersList_9.workers_9 = function () {
  return Workers_9.find({}, {sort: {name: 1, time: -1}});
};

var clearValues_9 = function () {
  $('#name_9').val("").focus();
  $('#floor_9').val("");
  $('#phone_9').val("");
  $('#time_9').val("");
}

Template.workersList_9.events({
  'click .add_worker': function () {
    var name  = $('#name_9').val();
    var floor = $('#floor_9').val();
    var phone = $('#phone_9').val();
    var time  = $('#time_9').val();
    if (name) {
      Workers_9.insert({name:name, floor:floor, phone:phone, time:time});
      clearValues_9();
    } else {
      alert("请至少输入您的尊姓大名!");
    }
  },
  'click .rm_worker': function () {
    Workers_9.remove(this._id);
  },
});


