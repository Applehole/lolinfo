import React from 'react';
import styled from 'styled-components';

const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(1rem, auto) minmax(1rem, auto);
  grid-template-rows: repeat(2, minmax(1rem, auto));
  grid-template-areas:
    'rune sub-rune'
    'spell sub-spell';

  justify-content: center;
  align-items: center;
  margin: 0 0;

  > img {
    background: #000;

    object-fit: cover;
    width: 22px;
    height: 22px;
  }

  > .rune {
    border-radius: 50%;

    position: relative;
    top: 6px;
    left: 7px;
  }

  > .sub-rune {
    border-radius: 50%;
    width: 12px;
    height: 12px;

    position: relative;
    top: 10px;
    left: 3px;
  }

  > .spell {
    position: relative;
    top: -5px;

    border: 1px solid black;
  }

  > .sub-spell {
    position: relative;
    top: -5px;

    border: 1px solid black;
  }
`;

function Skill() {
  return (
    <SkillWrapper>
      <img
        className="rune"
        src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
        rune-id="8229"
        alt="rune icon"
      ></img>
      <img
        className="sub-rune"
        src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png"
        rune-id="8100"
        alt="sub-rune icon"
      ></img>
      <img
        className="spell"
        src="https://ddragon.leagueoflegends.com/cdn/11.20.1/img/spell/SummonerHaste.png"
        spell-name="SummonerHaste"
        alt="spell-icon"
      ></img>
      <img
        className="sub-spell"
        src="https://ddragon.leagueoflegends.com/cdn/11.20.1/img/spell/SummonerHeal.png"
        spell-name="SummonerHeal"
        alt="spell-icon sub"
      ></img>
    </SkillWrapper>
  );
}

export default Skill;
