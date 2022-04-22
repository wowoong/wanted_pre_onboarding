# wanted_pre_onboarding

## Toggle 

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


---

## Input
