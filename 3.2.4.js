const obj = {
    name: 'seo',
    major: 'CS',
    getName: function() {
        console.log(this.name); // this = obj
    }
}
obj.name;
obj.major;
obj.getName();