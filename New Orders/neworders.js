
                        $('.btn').on('click', function() {
                            var $this = $(this);
                          $this.button('loading');
                            setTimeout(function() {
                               $this.button('reset');
                           }, 8000);
                        });
    function displaycn(){
      var trd = $(this).parent("tr");
      var rowid = trd.attr("id");
      $(rowid).children(".cwrite").hide();
    }