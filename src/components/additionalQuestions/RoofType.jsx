import React, { useState } from "react";
import RoofDirection from "./RoofDirection";
import "./RoofType.style.css";
import { Link as Scrolllink } from "react-scroll";
import Media from "react-media";
import { Grid, Icon, Popup, Card, Image } from "semantic-ui-react";

const RoofType = (props) => {
  const [roofType, setRoofType] = useState("");
  const components = [<RoofDirection />];
  const [index, setIndex] = useState("");

  return (
    <>
      <Media
        queries={{
          mobile: "(max-width: 599px)",
          desktop: "(min-width: 600px)",
        }}
      >
        {(matches) => (
          <>
            {matches.mobile && (
              <>
                {" "}
                <div id="roofTypeMobile">
                  <input type="hidden" name="roof_type" value={roofType} />
                  <Grid id="roofTypeIconsMobile">
                    <div id="roofTypeQuestionDiv">
                      <p id="questionForRoofType">
                        <img
                          id="roofDirectionQuestionImage"
                          src="/images/questionLogo.png"
                          alt="roofType"
                        />{" "}
                        {""}
                        What type of roof does the property have?
                      </p>
                    </div>
                    <button
                      className="roofTypeButtonIconsMobile"
                      id="roofTypeIconMobile"
                      type="button"
                      onClick={() => setRoofType("tiles")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofTypeCardMobile" fluid>
                        <Grid.Row
                          id="roofTypeCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofType/tilesMobile.png"
                              className="roofTypeImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofTypeCardTextMobile">Tiles</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>

                    <button
                      className="roofTypeButtonIconsMobile"
                      id="roofTypeIconMobile"
                      type="button"
                      onClick={() => setRoofType("felt")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofTypeCardMobile" fluid>
                        <Grid.Row
                          id="roofTypeCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofType/feltMobile.png"
                              className="roofTypeImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofTypeCardTextMobile">Felt</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>

                    <button
                      className="roofTypeButtonIconsMobile"
                      id="roofTypeIconMobile"
                      type="button"
                      onClick={() => setRoofType("zinc")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofTypeCardMobile" fluid>
                        <Grid.Row
                          id="roofTypeCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofType/zincMobile.png"
                              className="roofTypeImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofTypeCardTextMobile">Zinc</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>

                    <button
                      className="roofTypeButtonIconsMobile"
                      id="roofTypeIconMobile"
                      type="button"
                      onClick={() => setRoofType("EPDM(rubber)")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofTypeCardMobile" fluid>
                        <Grid.Row
                          id="roofTypeCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofType/rubberMobile.png"
                              className="roofTypeImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofTypeCardTextMobile">EPDM (rubber)</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <button
                      className="roofTypeButtonIconsMobile"
                      id="roofTypeIconMobile"
                      type="button"
                      onClick={() => setRoofType("corrugated metal")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofTypeCardMobile" fluid>
                        <Grid.Row
                          id="roofTypeCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofType/corrugatedMetalMobile.png"
                              className="roofTypeImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofTypeCardTextMobile">Corrugated metal</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <button
                      className="roofTypeButtonIconsMobile"
                      id="roofTypeIconMobile"
                      type="button"
                      onClick={() => setRoofType("other")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofTypeCardMobile" fluid>
                        <Grid.Row
                          id="roofTypeCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofType/otherMobile.png"
                              className="roofTypeImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofTypeCardTextMobile">Other</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <Card id="roofTypeCardMobile" fluid>
                      <Grid.Row id="roofTypeCardGridRowMobile" itemsPerRow={1}>
                        <Grid.Column>
                          <button
                            className="submitButtonMobile"
                            data-cy="button"
                            type="submit"
                            onClick={props.onSubmit}
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            onMouseDown={async (e) => {
                              setIndex(0);
                            }}
                            id="nextQuestionMobile"
                          >
                            Skip question
                          </button>
                        </Grid.Column>
                      </Grid.Row>
                    </Card>
                  </Grid>
                </div>
                <>{components[index]}</>
              </>
            )}
            {matches.desktop && (
              <>
                {" "}
                <div id="roofType">
                  <input type="hidden" name="roof_type" value={roofType} />
                  <Grid id="roofTypeIcons">
                    <div id="roofTypeQuestionDiv">
                      <p id="questionForRoofType">
                        <img
                          id="roofDirectionQuestionImage"
                          src="/images/questionLogo.png"
                          alt="roofType"
                        />{" "}
                        {""}
                        What type of roof does the property have?
                      </p>
                    </div>
                    <Grid.Row columns={4}>
                      <Grid.Column>
                        <Scrolllink
                          to="roofDirection"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={1500}
                          onMouseDown={async (e) => {
                            setIndex(0);
                          }}
                        >
                          <button
                            className="roofTypeButtonIcons"
                            id="tiledIcon"
                            type="button"
                            onClick={() => setRoofType("tiled")}
                          >
                            <img
                              className="imgRoofTypeIcons"
                              src="/images/questionIcons/roofType/tiles.png"
                              alt="tiled"
                            />
                          </button>
                        </Scrolllink>
                      </Grid.Column>
                      <Grid.Column>
                        <Scrolllink
                          to="roofDirection"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={1500}
                          onMouseDown={async (e) => {
                            setIndex(0);
                          }}
                        >
                          <button
                            className="roofTypeButtonIcons"
                            id="feltIcon"
                            type="button"
                            onClick={() => setRoofType("felt")}
                          >
                            <img
                              className="imgRoofTypeIcons"
                              src="/images/questionIcons/roofType/felt.png"
                              alt="felt"
                            />
                          </button>
                        </Scrolllink>
                      </Grid.Column>
                      <Grid.Column>
                        <Scrolllink
                          to="roofDirection"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={1500}
                          onMouseDown={async (e) => {
                            setIndex(0);
                          }}
                        >
                          <button
                            className="roofTypeButtonIcons"
                            id="zincIcon"
                            type="button"
                            onClick={() => setRoofType("zinc")}
                          >
                            <img
                              className="imgRoofTypeIcons"
                              src="/images/questionIcons/roofType/zinc.png"
                              alt="zinc"
                            />
                          </button>
                        </Scrolllink>
                      </Grid.Column>
                      <Grid.Column>
                        <Scrolllink
                          to="roofDirection"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={1500}
                          onMouseDown={async (e) => {
                            setIndex(0);
                          }}
                        >
                          <button
                            className="roofTypeButtonIcons"
                            id="rubberIcon"
                            type="button"
                            onClick={() => setRoofType("EPDM(rubber)")}
                          >
                            <img
                              className="imgRoofTypeIcons"
                              src="/images/questionIcons/roofType/rubber.png"
                              alt="EPDM(rubber)"
                            />
                          </button>
                        </Scrolllink>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <Scrolllink
                          to="roofDirection"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={1500}
                          onMouseDown={async (e) => {
                            setIndex(0);
                          }}
                        >
                          <button
                            className="roofTypeButtonIcons"
                            id="corrugatedMetalIcon"
                            type="button"
                            onClick={() => setRoofType("Corrugated Metal")}
                          >
                            <img
                              className="imgRoofTypeIcons"
                              src="/images/questionIcons/roofType/corrugatedMetal.png"
                              alt="Corrugated Metal"
                            />
                          </button>
                        </Scrolllink>{" "}
                      </Grid.Column>
                      <Grid.Column>
                        <Scrolllink
                          to="roofDirection"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={1500}
                          onMouseDown={async (e) => {
                            setIndex(0);
                          }}
                        >
                          <button
                            className="roofTypeButtonIcons"
                            id="anotherIcon"
                            type="button"
                            onClick={() => setRoofType("other")}
                          >
                            <img
                              className="imgRoofTypeIcons"
                              src="/images/questionIcons/roofType/other.png"
                              alt="other"
                            />
                          </button>
                        </Scrolllink>{" "}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <br />
                  <Scrolllink
                    to="roofSlope"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                  >
                    <Popup
                      trigger={
                        <Icon
                          size="big"
                          name="angle left"
                          id="backToRoofSlopeQ"
                        />
                      }
                      content="Go back to previous question"
                      inverted
                      position="bottom center"
                    />
                  </Scrolllink>
                  <Scrolllink
                    to="roofDirection"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    onMouseDown={async (e) => {
                      setIndex(0);
                    }}
                  >
                    <Popup
                      trigger={
                        <Icon
                          size="big"
                          name="angle right"
                          id="skipToRoofDirectionQ"
                        />
                      }
                      content="Skip to next question"
                      inverted
                      position="bottom center"
                    />
                  </Scrolllink>
                  <Popup
                    trigger={
                      <button
                        id="submitButton"
                        data-cy="button"
                        type="submit"
                        onClick={props.onSubmit}
                      >
                        Submit
                      </button>
                    }
                    content="Are you sure you want to submit now?"
                    inverted
                    position="top center"
                  />
                </div>
                <>{components[index]}</>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default RoofType;
