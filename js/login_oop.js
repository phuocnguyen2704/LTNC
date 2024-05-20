// ----------------------------------------------------------- OOP class user --------------------------------------------------------------------
class user{

    #name;
    #email;
    department;
    constructor(name, email ,department){
        this.#name=name
        this.#email=email
        this.department=department
    }

    get_name(){
        return this.#name;
    }
    set_name(name){
        return this.#name=name;
    }

    
    get_email(){
        return this.#email;
    }
    set_email(email){
        return this.#email=email;
    }



}


class course {
    constructor(course_name, course_id, course_teacher){
        this.course_name=course_name;
        this.course_id=course_id;
        this.course_teacher=course_teacher;
    }
    
    
    // get_info_course (course_id,){
        
    // }
}







