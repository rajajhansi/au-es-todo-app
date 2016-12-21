define('app',['exports', './todo'], function (exports, _todo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.todos = [new _todo.Todo('Task one', false), new _todo.Todo('Task two', false), new _todo.Todo('Task three', false)];
      this.todoTitle = '';
      this.message = 'Todo List';
    }

    App.prototype.addTodo = function addTodo() {
      this.todos.push(new _todo.Todo(this.todoTitle, false));
      this.todoTitle = '';
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('todo',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Todo = exports.Todo = function Todo(title) {
    var completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Todo);

    this.lastId = 0;

    this.id = ++this.lastId;
    this.title = title;
    this.completed = completed;
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"\">\n    <h1>${message}</h1>\n    <form method=\"post\" submit.trigger=\"addTodo()\">\n      <input type=\"text\" placeholer=\"What would you like to do?\" value.bind=\"todoTitle\">\n      <button type=\"submit\">Add</button>\n    </form>\n    <ul>\n      <li repeat.for=\"t of todos\">\n        <input type=\"checkbox\" checked.bind='t.completed' />\n        <span class.bind=\"t.completed ? 'strikeout' : ''\">${t.title}</span>\n      </li>\n    </ul>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map