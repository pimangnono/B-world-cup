import React, { Component } from "react";
import GameTitle from "./GameTitle.js";
import GameDraw from "./GameDraw.js";
import "../css/Game.css";

const base = [
  {
    id: 1,
    name: "안토니",
    img: "anthonny.jpg",
  },
  {
    id: 2,
    name: "박도하",
    img: "bakdoha.jpg",
  },
  {
    id: 3,
    name: "브라이언",
    img: "brian.jpg",
  },
  {
    id: 4,
    name: "차이진신",
    img: "caijinxin.jpg",
  },
  {
    id: 5,
    name: "성한빈",
    img: "sunghanbin.jpg",
  },
  {
    id: 6,
    name: "김지웅",
    img: "kimjiwoong.jpg",
  },
  {
    id: 7,
    name: "한유진",
    img: "hanyujin.jpg",
  },
  {
    id: 8,
    name: "김규빈",
    img: "kimgyuvin.jpg",
  },
  {
    id: 9,
    name: "석매튜",
    img: "seokmatthew.png",
  },
  {
    id: 10,
    name: "이회택",
    img: "leehoetaek.jpg",
  },
  {
    id: 11,
    name: "장하오",
    img: "zhanghao.jpg",
  },
  {
    id: 12,
    name: "제이",
    img: "jay.jpg",
  },
  {
    id: 13,
    name: "이다을",
    img: "leedaeul.jpg",
  },
  {
    id: 14,
    name: "박건욱",
    img: "parkgunwook.jpg",
  },
  {
    id: 15,
    name: "김태래",
    img: "kimtaerae.jpg",
  },
  {
    id: 16,
    name: "리키",
    img: "ricky.jpg",
  },
  {
    id: 17,
    name: "케이타",
    img: "keita.jpg",
  },
  {
    id: 18,
    name: "히로토",
    img: "hiroto.jpg",
  },
  {
    id: 19,
    name: "이승환",
    img: "leeseunghwan.jpg",
  },
  {
    id: 20,
    name: "차웅기",
    img: "chawoongki.jpg",
  },
  {
    id: 21,
    name: "올리",
    img: "ollie.jpg",
  },
  {
    id: 22,
    name: "타쿠토",
    img: "takuto.png",
  },
  {
    id: 23,
    name: "하루토",
    img: "haruto.jpg",
  },
  {
    id: 24,
    name: "임준서",
    img: "limjunseo.jpg",
  },
  {
    id: 25,
    name: "서원",
    img: "seowon.jpg",
  },
  {
    id: 26,
    name: "크리스티안",
    img: "krystian.jpg",
  },
  {
    id: 27,
    name: "오성민",
    img: "ohsungmin.jpg",
  },
  {
    id: 28,
    name: "유승언",
    img: "yooseungeon.jpg",
  },
  {
    id: 29,
    name: "마징시앙",
    img: "majingxiang.jpg",
  },
  {
    id: 30,
    name: "당홍하이",
    img: "danghonghai.jpg",
  },
  {
    id: 31,
    name: "천관루이",
    img: "chenkuanjui.jpg",
  },
  {
    id: 32,
    name: "장슈아이보",
    img: "zhangshuaibo.jpg",
  },
  {
    id: 33,
    name: "이동열",
    img: "leedongyeol.jpg",
  },
  {
    id: 34,
    name: "천지안위",
    img: "chenjianyu.jpg",
  },
  {
    id: 35,
    name: "문정현",
    img: "munjunghyun.jpg",
  },
  {
    id: 36,
    name: "박한빈",
    img: "parkhanbin.jpg",
  },
  {
    id: 37,
    name: "나캠든",
    img: "nakamden.jpg",
  },
  {
    id: 38,
    name: "왕즈하오",
    img: "wangzihao.png",
  },
  {
    id: 39,
    name: "정민규",
    img: "brian.jpg",
  },
  {
    id: 40,
    name: "유키",
    img: "yuki.jpg",
  },
  {
    id: 41,
    name: "쉬안하오",
    img: "xuanhao.jpg",
  },
  {
    id: 42,
    name: "이환희",
    img: "leehwanhee.jpg",
  },
  {
    id: 43,
    name: "이정현",
    img: "leejeonghyeon.jpg",
  },
  {
    id: 44,
    name: "이동건",
    img: "leedonggun.jpg",
  },
  {
    id: 45,
    name: "차이진신",
    img: "caijinxin.jpg",
  },
  {
    id: 46,
    name: "최우진",
    img: "choiwoojin.jpg",
  },
  {
    id: 47,
    name: "이예담",
    img: "leeyedam.jpg",
  },
  {
    id: 48,
    name: "콩",
    img: "cong.jpg",
  },
  {
    id: 49,
    name: "박지후",
    img: "parkjihoo.jpg",
  },
  {
    id: 50,
    name: "박현빈",
    img: "parkhyunbeen.jpg",
  },
  {
    id: 51,
    name: "우무티",
    img: "wumuti.jpg",
  },
  {
    id: 52,
    name: "최승훈",
    img: "choiseunghun.jpg",
  },
  {
    id: 53,
    name: "지윤서",
    img: "jiyunseo.jpg",
  },
  {
    id: 54,
    name: "유타카",
    img: "yutaka.jpg",
  },
  {
    id: 55,
    name: "정이찬",
    img: "jeongichan.jpg",
  },
  {
    id: 56,
    name: "천런유",
    img: "chenrenyou.jpg",
  },
  {
    id: 57,
    name: "원예천",
    img: "wenyechen.jpg",
  },
  {
    id: 58,
    name: "최지호",
    img: "choijiho.jpg",
  },
  {
    id: 59,
    name: "동동",
    img: "dongdong.jpg",
  },
  {
    id: 60,
    name: "장여준",
    img: "jangyeojun.jpg",
  },
  {
    id: 61,
    name: "천리앙",
    img: "chenliang.jpg",
  },
  {
    id: 62,
    name: "이치카",
    img: "ichika.jpg",
  },
  {
    id: 63,
    name: "나이스",
    img: "nice.jpg",
  },
  {
    id: 64,
    name: "하루",
    img: "haru.png",
  },
];

// dataset array shuffle randomly
base.sort(() => Math.random() - Math.random());
console.log(base);

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: [base[0], base[1]],
      round32: [],
      round16: [],
      round8: [],
      round4: [],
      round2: [],
      end: false,
      round: 64,
      sequence: 0,
      winner: null,
    };
  }

  handleReset() {
    base.sort(() => Math.random() - Math.random());
    this.setState({
      views: [base[0], base[1]],
      round32: [],
      round16: [],
      round8: [],
      round4: [],
      round2: [],
      end: false,
      round: 64,
      sequence: 0,
      winner: null,
    });
  }

  count = 0;
  async handleChange(id) {
    if (this.state.round2.length === 2) {
      this.setState({
        end: true,
        winner: this.state.round2.find((item) => item.id === id),
      });
      // alert(this.state.round2.find(item => item.id === id).name)
    }
    if (this.state.round2.length === 1) {
      // 결승 초기화면
      this.count = 0;
      const round2 = this.state.round2.slice();
      round2.push(this.state.round4.find((item) => item.id === id));
      await this.setState({
        round2: round2,
      });
      this.setState((prevState) => ({
        sequence: 0,
        views: [this.state.round2[0], this.state.round2[1]],
        round: 2,
      }));
    }
    if (this.state.round4.length > 3 && this.state.round2.length < 1) {
      // 4강 로직
      this.count++;
      const round2 = this.state.round2.slice();
      round2.push(
        this.state.round4.find((item) => {
          return item.id === id;
        })
      );
      this.setState((prevState) => ({
        sequence: prevState.sequence + 1,
        views: [
          this.state.round4[2 * this.count],
          this.state.round4[2 * this.count + 1],
        ],
        round2: round2,
      }));
    }

    if (this.state.round4.length === 3) {
      // 4강 초기화면
      this.count = 0;
      const round4 = this.state.round4.slice();
      round4.push(this.state.round8.find((item) => item.id === id));
      await this.setState({
        round4: round4,
      });
      this.setState((prevState) => ({
        sequence: 0,
        views: [this.state.round4[0], this.state.round4[1]],
        round: 4,
      }));
    }

    if (this.state.round8.length > 7 && this.state.round4.length < 3) {
      // 8강 로직
      this.count++;
      const round4 = this.state.round4.slice();
      round4.push(
        this.state.round8.find((item) => {
          return item.id === id;
        })
      );
      this.setState((prevState) => ({
        sequence: prevState.sequence + 1,
        views: [
          this.state.round8[2 * this.count],
          this.state.round8[2 * this.count + 1],
        ],
        round4: round4,
      }));
    }

    if (this.state.round8.length === 7) {
      // 8강 초기화면
      this.count = 0;
      const round8 = this.state.round8.slice();
      round8.push(base.find((item) => item.id === id));
      await this.setState({
        round8: round8,
      });
      this.setState((prevState) => ({
        sequence: 0,
        views: [this.state.round8[0], this.state.round8[1]],
        round: 8,
      }));
    }

    if (this.state.round16.length > 15 && this.state.round8.length < 7) {
      // 16강 로직
      this.count++;
      const round8 = this.state.round8.slice();
      round8.push(base.find((item) => item.id === id));

      this.setState((prevState) => ({
        sequence: prevState.sequence + 1, // sequence 1씩 증
        views: [base[2 * this.count], base[2 * this.count + 1]],
        round8: round8,
      }));
    }

    if (this.state.round16.length === 15) {
      // 16강 초기화면
      this.count = 0;
      const round16 = this.state.round16.slice();
      round16.push(base.find((item) => item.id === id));
      await this.setState({
        round16: round16,
      });
      this.setState((prevState) => ({
        sequence: 0,
        views: [this.state.round16[0], this.state.round16[1]],
        round: 16,
      }));
    }

    if (this.state.round32.length > 31 && this.state.round16.length < 15) {
      // 32강 로직
      this.count++;
      const round16 = this.state.round16.slice();
      round16.push(base.find((item) => item.id === id));

      this.setState((prevState) => ({
        sequence: prevState.sequence + 1, // sequence 1씩 증
        views: [base[2 * this.count], base[2 * this.count + 1]],
        round16: round16,
      }));
    }

    if (this.state.round32.length === 31) {
      // 32강 초기화면
      this.count = 0;
      const round32 = this.state.round32.slice();
      round32.push(base.find((item) => item.id === id));
      await this.setState({
        round32: round32,
      });
      this.setState((prevState) => ({
        sequence: 0,
        views: [this.state.round32[0], this.state.round32[1]],
        round: 32,
      }));
    }

    if (this.state.round32.length < 31) {
      // 64강 로직
      this.count++;
      const round32 = this.state.round32.slice();
      round32.push(base.find((item) => item.id === id));

      this.setState((prevState) => ({
        sequence: prevState.sequence + 1, // sequence 1씩 증
        views: [base[2 * this.count], base[2 * this.count + 1]],
        round32: round32,
      }));
    }
  }

  render() {
    const { views, end, round, sequence, winner } = this.state;
    const path = "../../../img/";
    console.log(this.state);
    return (
      <div className="game">
        <GameTitle round={round} sequence={sequence + 1} />
        {views.map((view, index) => {
          return (
            <GameDraw
              key={index}
              name={view.name}
              id={view.id}
              img={view.img}
              onChange={(id) => this.handleChange(id)}
            />
          );
        })}

        <div className={end ? "modal active" : "modal"}>
          {winner && (
            <div className="winnerDraw">
              <span className="winnerTitle">
                당신의 아이돌 <br />
                <span className="winnerName">{winner.name}</span> <br />
                <button className="replay" onClick={() => this.handleReset()}>
                  다시하기
                </button>
              </span>

              <img className="img" src={path + winner.img}></img>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Game;
