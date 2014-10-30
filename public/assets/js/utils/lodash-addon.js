(function(){
  var x_X = {};
  x_X.deepFind1 = function(obj, key) {
    //http://stackoverflow.com/questions/15642494/find-property-by-name-in-a-deep-object
    if (_.has(obj, key)) return [obj];

    var res = [];
    _.forEach(obj, function(v) {
      if (res.length != 1 && typeof v == "object" && (v = x_X.deepFind1(v, key)).length)
        res.push.apply(res, v);
    });
    return res;
  }
  return _.merge(_,x_X);
})();
