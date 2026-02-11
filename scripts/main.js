document.addEventListener('DOMContentLoaded', function() {
    const joinBtn = document.querySelector('.btn.btn-primary');
    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            alert('Thank you for your interest in joining our team!');
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdiVVH2H2SojskiZKW7_4la2ebA5B-IpnW5ZObeDW4LlWrn4A/viewform';
        });
    }
});