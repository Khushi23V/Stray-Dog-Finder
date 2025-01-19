const saveAlert=document.querySelectorAll(".alerting");
saveAlert.forEach(p => {
    p.onclick = () => alert("Profile Saved!");
});
