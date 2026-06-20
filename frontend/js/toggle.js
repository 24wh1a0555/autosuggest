var users=[
    {
        "name" :"John doe",
        "gender" :"male",
        "image":"/images/john.png"
    },
    {
       "name" :"Hasini",
        "gender" :"Female",
        "image":"/images/hasini.png"
    }
]
var curId=0;

function toggle(){
    //toggle curid for 0->1 n 1->0
    curId=(curId+1)%2;

    //image 
    var user=users[curId];
    document.getElementById("user-img").src=user.image;

    //name
    document.getElementById("user-name").innerText=user.name;
    //gender
    document.getElementById("user-gender").innerText=user.gender;
}