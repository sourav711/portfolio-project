
const servicePrototype = {
    body: 'Write the details of the project over here.'
}
function Service(heading) {
    this.heading = heading;
    this.body = heading + this.body;
    return output.innerHTML=body;
}
Service.prototype = servicePrototype;
Service.prototype.constructor = Service;


let service1 = new Service('Testing/Debugging');
let service2 = new Service('Website Design');
service1();

