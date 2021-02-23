function add() {
    var id = document.getElementById('id').value;
    var maths = document.getElementById('maths').value;
    var english = document.getElementById('english').value;
    var science = document.getElementById('science').value;
    var total = parseInt(maths) + parseInt(english) + parseInt(science);
    var average = parseInt(total / 3);
    var grade;
    var length0 = id.length;

    if (average >= 75 && average <= 100) {
        grade = 'A';
    } else if (average >= 65 && average <= 74) {
        grade = 'B';
    } else if (average >= 55 && average <= 64) {
        grade = 'C';
    } else if (average >= 40 && average <= 54) {
        grade = 'S';
    } else {
        grade = 'F';
    }

    var table = `<tr>
        <td><div class="card px-2 ml-1 py-0">${id}<div></td>
        <td><div class="card px-2 py-0">${maths}<div></td>
        <td><div class="card px-2 py-0">${english}<div></td>
        <td><div class="card px-2 py-0">${science}<div></td>
        <td><div class="card px-2 py-0">${total}<div></td>
        <td><div class="card px-2 py-0">${average}<div></td>
        <td><div class="card px-2 mr-1 py-0">${grade}<div></td>
      </tr>`;

    if (maths != '' && english != '' && science != '' && id != '' && maths <= 100 && english <= 100 && science <= 100 && maths > 0 && english > 0 && science > 0 && id <= 'ST-99999' && id >= 'ST-00001' && length0 == 8) {
        document.getElementById('tb').innerHTML += table;

        document.getElementById('id').value = '';
        document.getElementById('maths').value = '';
        document.getElementById('english').value = '';
        document.getElementById('science').value = '';

    } else {
        if (maths == '' && english == '' && science == '' && id == '') {
            document.querySelector('.alert4').style.display = 'block';
        } else if (!(id <= 'ST-99999' && id >= 'ST-00001') || length0 != 8) {
            document.querySelector('.alert0').style.display = 'block';
        } else if (id == '') {
            document.querySelector('.alert').style.display = 'block';
        } else if (maths == '') {
            document.querySelector('.alert1').style.display = 'block';
        } else if (english == '') {
            document.querySelector('.alert2').style.display = 'block';
        } else if (science == '') {
            document.querySelector('.alert3').style.display = 'block';
        } else if (maths > 100 || english > 100 || science > 100 || maths < 0 || english < 0 || science < 0) {
            document.querySelector('.alert5').style.display = 'block';
        }

        setTimeout(function() {
            document.querySelector('.alert').style.display = 'none';
            document.querySelector('.alert1').style.display = 'none';
            document.querySelector('.alert2').style.display = 'none';
            document.querySelector('.alert3').style.display = 'none';
            document.querySelector('.alert4').style.display = 'none';
            document.querySelector('.alert5').style.display = 'none';
            document.querySelector('.alert0').style.display = 'none';
        }, 2000);
    }

}