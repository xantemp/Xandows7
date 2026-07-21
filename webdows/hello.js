new explorer.window()
.title('Hello World')
.resize(200, 200)
.callback(function() {
    this.body.html('Test 123');
});
