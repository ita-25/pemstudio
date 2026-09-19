<script>
  const floatBtn = document.getElementById('pemFloatBtn');
  const chatWidget = document.querySelector('.pem-chat-widget');
  floatBtn.addEventListener('click', function(e){
    e.preventDefault();
    chatWidget.classList.toggle('active');
  });
</script>
