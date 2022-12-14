// JavaScript source code
chrome.alarms.onAlarm.addListener(() => {
    // Variables for chrome.notifications.create
    // Executed on timer end
    var notificationOptions = {
        type: 'basic',
        title: 'Timer up!',
        message: 'The timer ended',
        priority: 1,
        iconUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAkZQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////G4xlMwAAAMB0Uk5TABl7l5ZtDoD7WXL99k8QYXh2dMO+c1gKMnU8AQMULKujLhYEFcrlTgs+gq/X7e/ZsYdEE8fkUFW38vS9XBJM7uMCRfj+8dvA2vpJDYxB6+eiZTkbCejquYodpemSMAWU/KRT1rU2OOGtj/eug/UHFwh5hgZA0ovCp3Fs4jM3y8xG3iMk35udEfns3R8gL028d2ecz6Zr0WloSGKy8NPV1J+EzlccWluF2Ilwag9RUgwns7sourTJoW6IoMgtJT1gCld9OwAAAAFiS0dEwWRm724AAAAJcEhZcwAAOpkAADqZAVVg+iYAAAMLSURBVEjHvZX7P1NxGMePS1lokcvCSLsIkSS3iRwmLZWwQqKTkuSyKDW3mFUokW7KJXJJSSVUuuDzp/U1nJ2dbSc/9Or5aZ/P87z3fb7n+Z7voaj/Hw6OTs7r4bRl6yYAF5hDtG0TgKubGXDfvglAvMPDc6cX4O3j6eErMVm7/PwDhBBpYNBuIHiPTL6mFUqE7LVbHRoWvi8iUkT63x91IPrg6q5jDgGxcXb6iU9I5GwaqqTDyRSVcgRItbUGnZaUTqrUGUe9MjO9jmWoidB4Hc86oSE/Qk5a/334KZLIPp2Tmxeq1Ybm5eYEnyHG2Xx3iDKAAn594TnSedH5YrnZKim+ULTaGXOxVHkpjVefd5kkEsrklq78Sj6ZS3kxpXCgLTPJV8mcomOsNxZYcQ2otErIq9xQ7VmzIQN0OnZU12vd4VbHW5kqzQATfYOVN+vr/VlRc4tBIm8OituAnnM0K4AGzuOrBDIVFkAjg6ZmjnYG/DiyJRVMI7c+5g5QS9kHKEegNZCj21QwtAsBxrtQtXE0afkeLQTQ94EKs+xQIt3yVeEDVFwnlB2sKu7Cg4fCQLcBXY9Y1aNBr5YPPKakUinbpzYJmh423Qc8ofjA02d6vT44ZcMhm+hj088BZytgLV7IzE6/eWxWwEv3dcC7wxbQDzhZApJX/aYYMG44TlwgnsFgCSUYJYNg4llVNoRhmTAgG8ZQGat0r5EYJgyEJWJExyp6FKgSBt4Ao5zD46vBmEKoXjYGzThHT0Shc1IIeNuJqAmuMQUoC+3XFyqBKQvH+A4Il9qrl74HIoyW3jSDIbtNTQ5B9IHnzejJDZ1iuz4lltwQM3zX2Epu6I82upJ+SiUvdLt1onkEiHQR822xSyQ5s82UjfAna4h6Sz9zvazxXnJDt7bY7nX2C/kOVM8NzM+YZkrPzA8skGOu+Tpr72mIXZtW7/bsb9+jFxd//PyVzRDZ1CCm7AYdVGBQcz9ZakPBb5oSCnppeqFcZYLUqvK5hiXhclNIupdXfOrqXFeWuyV/r/738Qd24EEt+q6HwwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNC0yN1QwODoxMzozNSswMTowMAAOgNAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDQtMjdUMDg6MTM6MzUrMDE6MDBxUzhsAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTktMDItMDEgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnQXviyAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQANTEywNBQUQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1NTYzNDkyMTV0W/K8AAAAE3RFWHRUaHVtYjo6U2l6ZQAxMy42S0JCMZLnywAAADx0RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzLzU2L3NTVEVMVFYvMTkwNC90aW1lcl8xMjEyNDMucG5nUZ4drwAAAABJRU5ErkJggg=='
    
    }
    console.log("chrome.alarms listener worked");
    chrome.notifications.create('timerEndNotification', notificationOptions);
    chrome.tabs.create({
     url: "timeralarm.html"
    });
  });
chrome.runtime.onMessage.addListener(
    // Should run when the start timer button is pressed
    (request, sender, sendResponse) => {
        if(request.message.slice(0,14) == "start BG timer" ){
            console.log("Message received in background js: " + request.message);
            console.log("Alarm set for: " + parseInt(request.message.slice(14, 20)) / 60 + " minutes");
            // Use chrome.alarms in case service worker is killed while timer is running(MV3 pain)
            chrome.alarms.create({delayInMinutes: parseInt(request.message.slice(14, 20)) / 60})
            sendResponse({message: "start BG timer message received & acknowledged"});
        }
        else if(request.message == "stop BG timer"){
            console.log("Message received in background js: " + request.message);
            console.log("Timer cleared");
            chrome.alarms.clearAll(); 
            chrome.storage.sync.set({ "timerValue" : [0,0,0]});
        }
    });

    
