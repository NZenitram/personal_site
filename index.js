function inputCommand(command, term){
  var input = command.toLowerCase()
  if(input == 'help') {
    term.echo(new String('unhide: reveals linkicons'));
  } else if(input == 'github') {
    window.open("https://www.github.com/nzenitram");
  } else if(input == 'linkedin') {
    window.open("https://www.linkedin.com/in/nzenitram");
  } else if(input == 'resume') {
    window.open("http://www.nzenitram.com/blog/index.php/resume/");
  } else if(input == 'blog') {
    window.open("http://www.nzenitram.com/blog/")
  } else {
    term.echo(new String('Invalid Command: Type "Help" for more options'));
  };
};

jQuery(function($, terminal) {
    $('#console').terminal(function(command, term) {
        if (command !== '') {
            try {
                // var result = window.eval(command);
                if (command !== undefined) {
                    // term.echo(new String(command));
                    inputCommand(command, term);
                }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
    }, {
        greetings: 'Type Help For a List of Commands:',
        name: 'js_demo',
        height: 200,
        prompt: 'nm> '
    });
});
