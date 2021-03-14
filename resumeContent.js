const getSummary = () => {
    // Change text in HTML where id=setSummary
    var text = "";

    text += "<h2>I am</h2> a motivated and creative thinking <b>ICT Business Analyst / Developer</b> with 14+ years of experience ";
    text += "in a variety of tools and programming languages through departments within a range of ";
    text += "different processes with multicultural teams. I enjoy sharing knowledge with teammates, and ";
    text += "working collaboratively when needed and thrive when working in a fast-paced team environment. ";
    text += "Also, ability and willingness to learn new technologies, technologies, frameworks and paradigms ";
    text += "quickly. I developed a bunch of applications/systems to improve processes and bring results to ";
    text += "support the team and executive leadership through reports.";

    const el = document.getElementById('setSummary')
    el.innerHTML = text;
    
    
}

getSummary();