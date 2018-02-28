
$(function() {


  const newBurger = $('#enterHamburger');

  $(document).on('submit', '#burger-form', addBurger);
  $(document).on('click', '.burger-item', devourBurger);



  function devourBurger() {
    // Grab the id of the burger that is being clicked (devoured).
    let id = $(this).data('id');

    $.ajax({
      url: `/api/updateBurger/${id}`,
      type: 'PUT'
    }).then((response) => {
      console.log(response);
      location.reload()
    })
  }


  function addBurger(e) {
    e.preventDefault();
    let burger = {
      burger: newBurger.val().trim(),
      devoured: false
    };
    $.post("/api/addBurger", burger, (data) => {
      console.log(data);
    })
    window.location.reload();
    newBurger.val("")
  }


})
