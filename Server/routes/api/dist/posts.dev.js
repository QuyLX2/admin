"use strict";

var express = require('express');

var router = express.Router();

var authen = require('../../middleware/authen');

var _require = require('express-validator/check'),
    check = _require.check,
    validationResult = _require.validationResult;

var request = require('request');

var config = require('config');

var checkObjectId = require('../../middleware/checkObjectId');

var Person = require('../../models/Person');

var Post = require('../../models/Post'); // POST api/posts
// Create posts
// Private


router.post('/', [authen], [check('title', 'Title is required').not().isEmpty(), check('subTitle', 'Subtitle is required').not().isEmpty() // check('content', 'Content is required').not().isEmpty(),
], function _callee(req, res) {
  var errors, person, _req$body, subTitle, contentLesson, image, title, content, newContent, newPost, post;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(Person.findById(req.person.id).select('-password'));

        case 6:
          person = _context.sent;
          // Athor create post
          // Only admin can create posts
          // All can comment on all post
          _req$body = req.body, subTitle = _req$body.subTitle, contentLesson = _req$body.contentLesson, image = _req$body.image, title = _req$body.title, content = _req$body.content;
          newContent = {
            subTitle: subTitle,
            contentLesson: contentLesson,
            image: image
          };
          newPost = new Post({
            title: title,
            content: newContent
          });
          _context.next = 12;
          return regeneratorRuntime.awrap(newPost.save());

        case 12:
          post = _context.sent;
          res.json(post);
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          console.error(_context.t0.message);
          res.status(500).send('Server Error');

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 16]]);
}); // GET api/posts
// Get all posts
// Access private

router.get('/', authen, function _callee2(req, res) {
  var posts;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Post.find().sort({
            date: -1
          }));

        case 3:
          posts = _context2.sent;
          res.json(posts);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0.message);
          res.status(500).send('Server Error');

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // DELETE api/posts
// DELETE posts
// Access private
// Author: Admin

router["delete"]('/:id', [authen], function _callee3(req, res) {
  var post;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Post.findById(req.params._id));

        case 3:
          post = _context3.sent;

          if (post) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            msg: 'Post not found'
          }));

        case 6:
          _context3.next = 8;
          return regeneratorRuntime.awrap(post.remove());

        case 8:
          res.json({
            msg: 'Post removed'
          });
          _context3.next = 15;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0.message);
          res.status(500).send('Server Error');

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
}); // POST api/posts/comments/:id
// Post comment on a post
// Access private

router.post('/comment/:id', [authen, checkObjectId('id'), [check('text', 'Text is required').not().isEmpty()]], function _callee4(req, res) {
  var errors, person, post, newComment;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));

        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return regeneratorRuntime.awrap(Person.findById(req.person.id).select('-password'));

        case 6:
          person = _context4.sent;
          _context4.next = 9;
          return regeneratorRuntime.awrap(Post.findById(req.params.id));

        case 9:
          post = _context4.sent;
          newComment = {
            text: req.body.text,
            name: person.name,
            avatar: person.avatar,
            person: req.person.id
          };
          post.comments.unshift(newComment);
          _context4.next = 14;
          return regeneratorRuntime.awrap(post.save());

        case 14:
          res.json(post.comments);
          _context4.next = 21;
          break;

        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](3);
          console.error(_context4.t0.message);
          res.status(500).send('Server Error');

        case 21:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[3, 17]]);
}); // DELETE api/comments/:id
// Delete comments by id
// Author: Admin can delete all comment

router["delete"]('/comments/:id/:comment_id', authen, function _callee5(req, res) {
  var post, comment;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Post.findById(req.params.id));

        case 3:
          post = _context5.sent;
          // Pull out comment
          comment = post.comments.find(function (comment) {
            return comment.id === req.params.comment_id;
          }); // Make sure comment exists

          if (comment) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            msg: 'Comment does not exist'
          }));

        case 7:
          if (!(comment.person.toString() !== req.person.id)) {
            _context5.next = 9;
            break;
          }

          return _context5.abrupt("return", res.status(401).json({
            msg: 'Person not authorized'
          }));

        case 9:
          post.comments = post.comments.filter(function (_ref) {
            var id = _ref.id;
            return id !== req.params.comment_id;
          });
          _context5.next = 12;
          return regeneratorRuntime.awrap(post.save());

        case 12:
          return _context5.abrupt("return", res.json(post.comments));

        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0.message);
          res.status(500).send('Server Error');

        case 19:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 15]]);
});
module.exports = router;