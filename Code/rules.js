$(()=>{

    // buttons next
    document.querySelector('.btns1').addEventListener('click', function () {
            document.querySelector('.para1').style.display = 'none';
            document.querySelector('.para2').style.display = 'block';
    });

    document.querySelector('#btn-next2').addEventListener('click', function () {
        document.querySelector('.para2').style.display = 'none';
        document.querySelector('.para3').style.display = 'block';
    });

    document.querySelector('#btn-next3').addEventListener('click', function () {
        document.querySelector('.para3').style.display = 'none';
        document.querySelector('.para4').style.display = 'block';
    });

    document.querySelector('#btn-next4').addEventListener('click', function () {
        document.querySelector('.para4').style.display = 'none';
        document.querySelector('.para5').style.display = 'block';
    });

    document.querySelector('#btn-next5').addEventListener('click', function () {
        document.querySelector('.para5').style.display = 'none';
        document.querySelector('.para6').style.display = 'block';
    });

    document.querySelector('#btn-next6').addEventListener('click', function () {
        document.querySelector('.para6').style.display = 'none';
        document.querySelector('.para7').style.display = 'block';
    });

    // buttons previous

    document.querySelector('#btn-prev2').addEventListener('click', function () {
        document.querySelector('.para2').style.display = 'none';
        document.querySelector('.para1').style.display = 'block';
    });

    document.querySelector('#btn-prev3').addEventListener('click', function () {
        document.querySelector('.para3').style.display = 'none';
        document.querySelector('.para2').style.display = 'block';
    });

    document.querySelector('#btn-prev4').addEventListener('click', function () {
        document.querySelector('.para4').style.display = 'none';
        document.querySelector('.para3').style.display = 'block';
    });

    document.querySelector('#btn-prev5').addEventListener('click', function () {
        document.querySelector('.para5').style.display = 'none';
        document.querySelector('.para4').style.display = 'block';
    });

    document.querySelector('#btn-prev6').addEventListener('click', function () {
        document.querySelector('.para6').style.display = 'none';
        document.querySelector('.para5').style.display = 'block';
    });

    document.querySelector('#btn-prev7').addEventListener('click', function () {
        document.querySelector('.para7').style.display = 'none';
        document.querySelector('.para6').style.display = 'block';
    });

});