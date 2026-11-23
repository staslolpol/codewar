function getGrade (s1, s2, s3) {
  s = s1 + s2 + s3;
  s/=3;
  if(s >= 90 && s <=100){
    return "A";
  }
  if(s >= 80 && s < 90){
    return "B";
  }
  if(s >= 70 && s < 80){
    return "C";
  }
  if(s >= 60 && s < 70){
    return "D";
  }
    return "F";
}
