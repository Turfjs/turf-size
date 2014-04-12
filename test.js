var test = require('tape')
var size = require('./')

test('size', function(t){
  var bbox = [0, 0, 10, 10]
  var sized = size(bbox, 2)
  t.deepEqual(sized, [-10, -10, 20, 20], 'should double the size of a bbox at 0,0')

  var bbox = [-10, -10, 0, 0]
  var sized = size(bbox, 2)
  t.deepEqual(sized, [-20, -20, 10, 10], 'should double the size of a bbox at -10,-10')

  var bbox = [0, 0, 10, 10]
  var sized = size(bbox, 2)
  t.deepEqual(sized, [-5, -5, 15, 15], 'should expand the size of a bbox by 50%')

  var bbox = [0, 0, 10, 10]
  var sized = size(bbox, 2)
  t.deepEqual(sized, [.25, .25, 7.5, 7.5], 'should shrink a bbox by 50%')

  t.end()
})