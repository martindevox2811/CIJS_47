"use strict";

var component = {};
component.welcomePage = "\n<h1>Welcome to my Chat App</h1>\n";
component.register = "\n<div class=\"register-container\">\n        <form id=\"register-form\">\n            <div class=\"register-header\">\n                Mindx Chat\n            </div>\n            <div class=\"name-wrapper\">\n                <div class=\"input-wrapper\">\n                    <input type=\"text\" placeholder=\"First name\" name=\"firstName\">\n                    <div class=\"error\" id=\"first-name-error\"></div>\n                </div>\n                <div class=\"input-wrapper\">\n                    <input type=\"text\" placeholder=\"Last name\" name=\"lastName\">\n                    <div class=\"error\" id=\"last-name-error\"></div>\n                </div>\n            </div>\n            <div class=\"input-wrapper\">\n                <input type=\"email\" placeholder=\"Email\" name=\"email\">\n                <div class=\"error\" id=\"email-error\"></div>\n            </div>\n            <div class=\"input-wrapper\">\n                <input type=\"password\" placeholder=\"Password\" name=\"password\">\n                <div class=\"error\" id=\"password-error\"></div>\n            </div>\n            <div class=\"input-wrapper\">\n                <input type=\"password\" placeholder=\"Confirm Password\" name=\"confirmPassword\">\n                <div class=\"error\" id=\"confirm-password-error\"></div>\n            </div>\n            <div class=\"form-action\">\n                <div>Already have an account? <span id=\"redirect-to-login\" class=\"cursor-pointer\">Login</span></div>\n                <button class=\"btn cursor-pointer\" type=\"submit\">Register</button>\n            </div>\n        </form>\n    </div>\n";
component.login = "\n<div class=\"login-container\">\n        <form id=\"login-form\">\n            <div class=\"login-header\">\n                Mindx Chat\n            </div>\n            <div class=\"input-wrapper\">\n                <input type=\"email\" placeholder=\"Email\" name=\"email\">\n                <div class=\"error\" id=\"email-error\"></div>\n            </div>\n            <div class=\"input-wrapper\">\n                <input type=\"password\" placeholder=\"Password\" name=\"password\">\n                <div class=\"error\" id=\"password-error\"></div>\n            </div>\n            <div class=\"form-action\">\n                <div>Don't have an account? <span id=\"redirect-to-register\" class=\"cursor-pointer\" >Register</span></div>\n                <button class=\"btn cursor-pointer\" type=\"submit\">Login</button>\n            </div>\n        </form>\n    </div>\n";
component.chatPage = "\n<div class=\"chat-container\">\n        <div class=\"header\">\n            Mindx Chat\n        </div>\n        <div class=\"main\">\n            <div class=\"conversation-detail\">\n                <div class=\"conversation-title\">First conversation</div>\n                <div class=\"list-message\">\n                    \n                </div>\n                <form action=\"\" id=\"send-message-form\" class=\"border-input\">\n                    <div class=\"input-wrapper\">\n                        <input type=\"text\" class = \"text-wrapper\" placeholder=\"Type a message\" name=\"message\">\n                    </div>\n                    <button type=\"submit\"><i class=\"far fa-paper-plane btn-send\" ></i></button>\n                </form>\n            </div>\n        </div>\n    </div>";