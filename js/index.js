'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reactFormContainer = document.querySelector('.react-form-container');

var ReactFormLabel = function (_React$Component) {
  _inherits(ReactFormLabel, _React$Component);

  function ReactFormLabel() {
    _classCallCheck(this, ReactFormLabel);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  ReactFormLabel.prototype.render = function render() {
    return React.createElement(
      'label',
      { htmlFor: this.props.htmlFor },
      this.props.title
    );
  };

  return ReactFormLabel;
}(React.Component);

var ReactForm = function (_React$Component2) {
  _inherits(ReactForm, _React$Component2);

  function ReactForm() {
    _classCallCheck(this, ReactForm);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this));

    _this2.handleChange = function (e) {
      var newState = {};

      newState[e.target.name] = e.target.value;

      _this2.setState(newState);
    };

    _this2.handleSubmit = function (e, message) {
      e.preventDefault();

      var formData = {
        formSender: _this2.state.name,
        formEmail: _this2.state.email,
        formSubject: _this2.state.subject,
        formMessage: _this2.state.message
      };

      if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
        return false;
      }

      $.ajax({
        url: '/some/url',
        dataType: 'json',
        type: 'POST',
        data: formData,
        success: function success(data) {
          if (confirm('Thank you for your message. Can I erase the form?')) {
            document.querySelector('.form-input').val('');
          }
        },
        error: function error(xhr, status, err) {
          console.error(status, err.toString());
          alert('There was some problem with sending your message.');
        }
      });

      _this2.setState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    };

    _this2.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    return _this2;
  }

  ReactForm.prototype.render = function render() {
    return React.createElement(
      'form',
      { className: 'react-form', onSubmit: this.handleSubmit },
      React.createElement(
        'h1',
        null,
        'Say Hi!'
      ),
      React.createElement(
        'fieldset',
        { className: 'form-group' },
        React.createElement(ReactFormLabel, { htmlFor: 'formName', title: 'Full Name:' }),
        React.createElement('input', { id: 'formName', className: 'form-input', name: 'name', type: 'text', ref: 'formName', required: true, onChange: this.handleChange, value: this.state.name })
      ),
      React.createElement(
        'fieldset',
        { className: 'form-group' },
        React.createElement(ReactFormLabel, { htmlFor: 'formEmail', title: 'Email:' }),
        React.createElement('input', { id: 'formEmail', className: 'form-input', name: 'email', type: 'email', required: true, onChange: this.handleChange, value: this.state.email })
      ),
      React.createElement(
        'fieldset',
        { className: 'form-group' },
        React.createElement(ReactFormLabel, { htmlFor: 'formSubject', title: 'Subject:' }),
        React.createElement('input', { id: 'formSubject', className: 'form-input', name: 'subject', type: 'text', required: true, onChange: this.handleChange, value: this.state.subject })
      ),
      React.createElement(
        'fieldset',
        { className: 'form-group' },
        React.createElement(ReactFormLabel, { htmlFor: 'formMessage', title: 'Message:' }),
        React.createElement('textarea', { id: 'formMessage', className: 'form-textarea', name: 'message', required: true, onChange: this.handleChange })
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement('input', { id: 'formButton', className: 'btn', type: 'submit', placeholder: 'Send message' })
      )
    );
  };

  return ReactForm;
}(React.Component);

;

ReactDOM.render(React.createElement(ReactForm, null), reactFormContainer);