class TV{
    constructor(brand){
    this.brand = brand ;
    this.channel = 1 ;
    this.volume = 50 ;
 }
 changeVolume(percentVol){
    if(percentVol <= 100 && percentVol >=0){
        this.volume = percentVol
    }
 }
 setChannel(channelNum){
    if(channelNum <= 50 && channelNum >=1){
        this.channel = channelNum
    }
 }
 toReset(){
    if(this.volume !== 50 && this.channel !== 1){
        this.volume = 50 
        this.channel = 1
    }
 }
 getStatus(){
    return `${this.brand} at channel ${this.channel} , volume ${this.volume}`
 }
}
