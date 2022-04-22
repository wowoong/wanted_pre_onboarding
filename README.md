# wanted_pre_onboarding

## Toggle 

![Toggle](https://user-images.githubusercontent.com/85971333/164626375-65e73539-2bbe-429f-930f-e06788373695.gif)


```
 const [toggle, setToggle] = useState(0);
  
  return (
    <ToggleWrap>
      <Left onClick={() => setToggle(0)} selected={toggle === 0 ? true : false}>기본</Left>
      <Right onClick={() => setToggle(1)} selected={toggle === 1 ? true : false}>상세</Right>
      <Ball toggle={toggle}></Ball>
    </ToggleWrap>
  )

```
* 왼쪽과 오른쪽으로 나누어서 상태를 0,1로 저장했습니다.
* 토글 기능은 Html과 CSS로만 만들어 봐서 REACT로 만들때 어떻게 해야 고민이 많았습니다.


---

## Input

![E-mail](https://user-images.githubusercontent.com/85971333/164626392-565aa685-4b2e-49a2-96d1-5271d07ef1b1.gif)

* 기본기능인 E-mail, password은 구현하였고 부가 기능 중 패스워드 보이기 숨기기는 구현하였다.
