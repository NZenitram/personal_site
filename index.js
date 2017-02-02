function inputCommand(command, term){
  var input = command.toLowerCase()
  if(input == 'help') {
    term.echo(new String("Reveal: Reveals linkicons \n\nGitHub: Opens up my GitHub profile \n\nLinkedIn: Opens my LinkedIn profile \n\nTuring: Opens my Turing School profile \n\nResume: Opens a page with my resume \n\nBlog: Opens my blog "));
  } else if(input == 'github') {
    window.open("https://www.github.com/nzenitram");
  } else if(input == 'linkedin') {
    window.open("https://www.linkedin.com/in/nzenitram");
  } else if(input == 'resume') {
    window.open("http://www.nzenitram.com/blog/index.php/resume/");
  } else if(input == 'blog') {
    window.open("http://www.nzenitram.com/blog/")
  } else if(input == 'reveal') {
    $('#linkicons-header').removeAttr('style');
  } else if(input == 'turing') {
    window.open("https://www.turing.io/alumni/nicholas-martinez")
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

function unhide(){
  $('#linkicons-header').removeAttr('style');
}

$( document ).ready(function() {

  setTimeout(function(){ unhide(); }, 5000);


});
