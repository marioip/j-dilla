angular.module('jDillaApp', [])
  .controller('JDillaController', function($scope) {

    $scope.mentions = [
      {
        name:'Questlove',
        image:'assets/images/questlove_big.jpg',
        mention:'"If you were to secretly ask the most praised hip-hop producers, if given a top three, who they fear the most, Dilla’s name would chart on everyone’s list, hands down."'
      },
      {
        name:'Pete Rock',
        image:'assets/images/peterock_big.jpg',
        mention:'"He was one of the greatest, man. He was the greatest to ever do it, for the new cats. And for his mother to tell me that I was his favorite producer – I was like ‘Wow, that’s dope, man."'
      },
      {
        name:'Black Thought',
        image:'assets/images/blackthought_big.jpg',
        mention:'"I can’t begin to explain the influence his mind and ear has had on my band, myself, and the careers of so many other artists. The most humble, modest, worthy and gifted beatmaker I’ve known..."'
      }
    ];
 
  });