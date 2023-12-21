// @flow strict
import { type Node as ReactNode } from 'react';
import AccessibilitySection from '../../docs-components/AccessibilitySection';
import docGen, { type DocGen } from '../../docs-components/docgen';
import LocalizationSection from '../../docs-components/LocalizationSection';
import MainSection from '../../docs-components/MainSection';
import Page from '../../docs-components/Page';
import PageHeader from '../../docs-components/PageHeader';
import QualityChecklist from '../../docs-components/QualityChecklist';
import SandpackExample from '../../docs-components/SandpackExample';
import dontCreateYourOwn from '../../examples/divider/dontCreateYourOwn';
import dontInset from '../../examples/divider/dontInset';
import dontOveruse from '../../examples/divider/dontOveruse';
import dontUseForDecoration from '../../examples/divider/dontUseForDecoration';
import mainExample from '../../examples/divider/mainExample';
import orientationExample1 from '../../examples/divider/orientationExample1';
import orientationExample2 from '../../examples/divider/orientationExample2';
import useDefaultGestalt from '../../examples/divider/useDefaultGestalt';
import useFromEdgeToEdge from '../../examples/divider/useFromEdgeToEdge';
import useToSeparateCollections from '../../examples/divider/useToSeparateCollections';
import useWhitespaceToSeparateGroups from '../../examples/divider/useWhitespaceToSeparateGroups';

export default function DividerPage({ generatedDocGen }: { generatedDocGen: DocGen }): ReactNode {
  return (
    <Page title={generatedDocGen?.displayName}>
      <PageHeader name={generatedDocGen?.displayName} packageFileLocation={generatedDocGen?.packageFileLocation} description={generatedDocGen?.description}>
        <SandpackExample
          name="Main Example"
          code={mainExample}
          layout="column"
          hideEditor
          previewHeight={200}
        />
      </PageHeader>

      <MainSection name="Usage guidelines">
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            type="do"
            title="When to use"
            description="Dividers should be used to bring clarity and structure to a layout. Primarily, Dividers help to separate groups of related elements or break up dense content."
          />
          <MainSection.Card
            type="don't"
            title="When not to use"
            description="Dividers shouldn't be used if elements can be separated using white space."
          />
        </MainSection.Subsection>
      </MainSection>

      <MainSection name="Best practices">
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            description="Use whitespace primarily to separate groups of related content."
            sandpackExample={
              <SandpackExample
                name="Use Whitespace To Separate Groups"
                code={useWhitespaceToSeparateGroups}
                layout="column"
                hideEditor
              />
            }
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            description="Overuse Dividers as this can cause them to lose their value and create unnecessary noise."
            sandpackExample={
              <SandpackExample
                name="Don't Overuse, Avoid Noise"
                code={dontOveruse}
                layout="column"
                hideEditor
                hideControls
              />
            }
          />
        </MainSection.Subsection>
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            description="Use the default Gestalt Divider - 1px gray line."
            sandpackExample={
              <SandpackExample
                name="Use Default Gestalt"
                code={useDefaultGestalt}
                layout="column"
                hideEditor
              />
            }
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            description="Create your own divider with a different color or stroke style."
            sandpackExample={
              <SandpackExample
                name="Don't Create Your Own With Different Style"
                code={dontCreateYourOwn}
                layout="column"
                hideEditor
                hideControls
              />
            }
          />
        </MainSection.Subsection>
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            description="Use horizontal Dividers from edge to edge."
            sandpackExample={
              <SandpackExample
                name="Use From Edge To Edge"
                code={useFromEdgeToEdge}
                layout="column"
                hideEditor
              />
            }
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            description="Inset Divider in a way that causes it to be free-floating or separated from content."
            sandpackExample={
              <SandpackExample
                name="Don't Inset That Causes It Free Floating"
                code={dontInset}
                layout="column"
                hideEditor
                hideControls
              />
            }
          />
        </MainSection.Subsection>
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            description="Use Dividers to separate collections of content or create the appearance of containers."
            sandpackExample={
              <SandpackExample
                name="Use To Separate Collections Of Content"
                code={useToSeparateCollections}
                layout="column"
                hideEditor
              />
            }
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            description="Use Dividers for decoration or to separate grouped content."
            sandpackExample={
              <SandpackExample
                name="Don't Use For Decoration Or To Separate Grouped Content"
                code={dontUseForDecoration}
                layout="column"
                hideEditor
                hideControls
              />
            }
          />
        </MainSection.Subsection>
      </MainSection>
      <AccessibilitySection
        name={generatedDocGen?.displayName}
        description="Divider is not focusable and is treated as decorative. Screen readers on tab navigation don't announce Dividers but do announce them on left/right quick navigation."
      />

      <LocalizationSection
        name={generatedDocGen?.displayName}
        noDefaultLabelProvider
        noBaseText
        notes={`If you are aligning Divider to content, ensure that it switches sides according to the content's start-end alignment.`}
      />

      <MainSection name="Variants">
        <MainSection.Subsection
          title="Orientation"
          columns={2}
          description="You can use this component as a vertical divider between two elements. Placing it within a Flex layout with a direction of `row` will shift Divider to a vertical orientation."
        >
          <MainSection.Card
            cardSize="lg"
            title="Horizontal"
            sandpackExample={
              <SandpackExample
                name="Orientation Example 1"
                code={orientationExample1}
                layout="column"
              />
            }
          />
          <MainSection.Card
            cardSize="lg"
            title="Vertical"
            sandpackExample={
              <SandpackExample
                name="Orientation Example 2"
                code={orientationExample2}
                layout="column"
              />
            }
          />
        </MainSection.Subsection>
      </MainSection>
      <QualityChecklist component={generatedDocGen?.displayName} />
    </Page>
  );
}

export async function getServerSideProps(): Promise<{
  props: { generatedDocGen: DocGen },
}> {
  return {
    props: { generatedDocGen: await docGen('Divider') },
  };
}
