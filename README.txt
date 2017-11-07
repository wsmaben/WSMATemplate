Notes:



This script should unencode the decoded blob from the database. I'll have to filter the stuff out first, then get the data into the var.

<script>
function myFunction() {
    var uri = "my%20test.asp?name=st%C3%A5le&car=saab";
    var res = decodeURI(uri);
    document.getElementById("demo").innerHTML = res;
}
</script>