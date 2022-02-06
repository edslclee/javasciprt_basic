class TravelClub{
    //구성요소
    // 1. 데이터 속성
    // 2. 메소드
    // 3. 초기화 메소드 -> 생성자(constructor())
    // name; 
    // intro;
    // foundedDate;
    
    constructor(name, intro){
        this._name = name;
        this._intro = intro;
        this._foundedDate = new Date();

    }
    
    get name(){
        return this._name;
    }
    get intro(){
        return this._intro;
    }

   set name(name){
        this._name = name;
    }

    set intro(intro){
        this._intro = intro;
    }

}

// let newClub = new TravelClub('test club', 'test intro');
// console.log(newClub.getName);
// newClub.intro = "THis is intro update";
// console.log(newClub.intro);
