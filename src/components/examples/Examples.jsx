import React from "react";
import { EXAMPLES } from "../../data.js";
import Tabs from "../Tabs/Tabs.jsx";
import { useState } from "react";
import Section from "../Section/Section.jsx";
import TabsWrapper from "../TabsWrapper/TabsWrapper.jsx";

const Examples = () => {
  const [content, setContent] = useState();

  const onClickHander = (e) => {
    const value = e.target.innerHTML.toLowerCase();
    setContent(value);
  };

  return (
    <Section id="examples" title="Examples">
      <TabsWrapper
        ContainerType="menu"
        items={
          <>
            <Tabs isSelected={content === "components"} onClick={onClickHander}>
              Components
            </Tabs>
            <Tabs isSelected={content === "jsx"} onClick={onClickHander}>
              JSX
            </Tabs>
            <Tabs isSelected={content === "props"} onClick={onClickHander}>
              Props
            </Tabs>
            <Tabs isSelected={content === "state"} onClick={onClickHander}>
              State
            </Tabs>
          </>
        }
      >
        <div id="tab-content">
          {content ? (
            <>
              <h3>{EXAMPLES?.[content]?.title}</h3>
              <p>{EXAMPLES?.[content]?.description}</p>
              <pre>
                <code>{EXAMPLES?.[content]?.code}</code>
              </pre>
            </>
          ) : (
            <p>Select a topic.</p>
          )}
        </div>
      </TabsWrapper>
    </Section>
  );
};

export default Examples;
