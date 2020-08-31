const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'register':
            document.getElementById('app').innerHTML = component.register
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(data)
            })
            document.getElementById('redirect-to-login').addEventListener('click', function () {
                view.setActiveScreen('login')
            })
            break;
        case 'login':
            document.getElementById('app').innerHTML = component.login
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(data)
            })
            document.getElementById('redirect-to-register').addEventListener('click', function () {
                view.setActiveScreen('register')
            })
            break;
        case 'chatPage':
            document.getElementById('app').innerHTML = component.chatPage
            const sendMessageForm = document.getElementById('send-message-form')
            sendMessageForm.addEventListener('submit', function (e) {
                e.preventDefault()
                console.log(sendMessageForm.message.value)
                const message = {
                    content: sendMessageForm.message.value,
                    owner: model.currentUser.email,
                    createdAt: new Date().toISOString()
                }
                if (sendMessageForm.message.value.trim() !== "") {
                    model.addMessage(message)
                }
                // updateMessage(message);
                sendMessageForm.message.value = ''
            })
            model.getConversations()
            model.listenConversationChange()
            break;
    }
}
view.setErrorMessage = (elementId, content) => {
    document.getElementById(elementId).innerText = content
}
view.scrollToEndElement = () =>{
    const element = document.querySelector('.list-message')
    element.scrollTop = element.scrollHeight
}
view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message')
    if (message.owner === model.currentUser.email) {
        messageWrapper.classList.add('mine')
        messageWrapper.innerHTML = `
        <div class="content">${message.content}</div>`
    } else {
        messageWrapper.classList.add('their')
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>`
    }
    document.querySelector('.list-message').appendChild(messageWrapper)
    // document.querySelector('.list-message').scrollBy(0, document.body.scrollHeight);
}
view.showCurrentConversation = () => {
    for (message of model.currentConversation.messages) {
        view.addMessage(message)
    }
    view.scrollToEndElement();
}