// @flow strict
import { type Node as ReactNode } from 'react';
import AccessibilitySection from '../../docs-components/AccessibilitySection';
import docGen, { type DocGen } from '../../docs-components/docgen';
import GeneratedPropTable from '../../docs-components/GeneratedPropTable';
import LocalizationSection from '../../docs-components/LocalizationSection';
import MainSection from '../../docs-components/MainSection';
import Page from '../../docs-components/Page';
import PageHeader from '../../docs-components/PageHeader';
import QualityChecklist from '../../docs-components/QualityChecklist';
import SandpackExample from '../../docs-components/SandpackExample';
import accessibilityExample from '../../examples/searchfield/accessibilityExample';
import dontAddCriticalInfoToPlaceholder from '../../examples/searchfield/dontAddCriticalInfoToPlaceholder';
import dontHideBehindIcon from '../../examples/searchfield/dontHideBehindIcon';
import dontTruncateText from '../../examples/searchfield/dontTruncateText';
import errorExample from '../../examples/searchfield/errorExample';
import localizationExample from '../../examples/searchfield/localizationExample';
import mainExample from '../../examples/searchfield/mainExample';
import makePlaceholderSpecific from '../../examples/searchfield/makePlaceholderSpecific';
import makeSearchFieldWide from '../../examples/searchfield/makeSearchFieldWide';
import placeAboveContent from '../../examples/searchfield/placeAboveContent';
import sizesExample from '../../examples/searchfield/sizesExample';
import variantsExample from '../../examples/searchfield/variantsExample';

export default function SearchFieldPage({
  generatedDocGen,
}: {
  generatedDocGen: DocGen,
}): ReactNode {
  return (
    <Page title="SearchField">
      <PageHeader name="SearchField" packageFileLocation={generatedDocGen?.packageFileLocation} description={generatedDocGen?.description}>
        <SandpackExample
          name="Main example"
          code={mainExample}
          hideEditor
          hideControls
          layout="column"
        />
      </PageHeader>

      <GeneratedPropTable generatedDocGen={generatedDocGen} />

      <MainSection name="Usage guidelines">
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            title="When to use"
            description={`
          - To search or filter content within a surface.
        `}
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            title="When not to use"
            description={`
          - As a means of inputting content to a form. Use [TextField](/web/textfield) instead.
          - To act as an auto-complete input. Use [ComboBox](/web/combobox) instead.
        `}
          />
        </MainSection.Subsection>
      </MainSection>

      <MainSection name="Best practices">
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            showCode={false}
            type="do"
            description="Place SearchField above the content the user will be searching."
            sandpackExample={
              <SandpackExample
                name="Do - Place SearchField above the content the user will be searching."
                code={placeAboveContent}
                hideEditor
                layout="column"
              />
            }
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            description="Hide SearchField behind an IconButton if there is enough space for the full component."
            sandpackExample={
              <SandpackExample
                name="Don't - Hide SearchField behind an IconButton if there is enough space for the full component."
                code={dontHideBehindIcon}
                hideEditor
                hideControls
                layout="column"
              />
            }
          />
        </MainSection.Subsection>

        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            description="Make the `placeholder` specific. Give the user a hint about the content they're searching and/or what parameters they can use to search."
            sandpackExample={
              <SandpackExample
                name="Do - Make the `placeholder` specific"
                code={makePlaceholderSpecific}
                hideEditor
                layout="column"
              />
            }
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            description="Add critical information to the `placeholder`. The `placeholder` text disappears once the user begins entering data and will therefore be unavailable."
            sandpackExample={
              <SandpackExample
                name="Don't - Add critical information to the `placeholder`."
                code={dontAddCriticalInfoToPlaceholder}
                hideEditor
                hideControls
                layout="column"
              />
            }
          />
        </MainSection.Subsection>

        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            description="Make sure SearchField is displayed wide enough to completely display common search terms."
            sandpackExample={
              <SandpackExample
                name="Do - Make sure SearchField is displayed wide enough to completely display common search terms."
                code={makeSearchFieldWide}
                hideEditor
                layout="column"
              />
            }
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            description="Truncate or wrap text within SearchField."
            sandpackExample={
              <SandpackExample
                name="Don't - Truncate or wrap text within SearchField."
                code={dontTruncateText}
                hideEditor
                hideControls
                layout="column"
              />
            }
          />
        </MainSection.Subsection>
      </MainSection>

      <AccessibilitySection name={generatedDocGen?.displayName}>
        <MainSection.Subsection
          title="Labels"
          description={`
      SearchField should ideally have a visible label above the input using the \`label\` prop. However, if need be, \`accessibilityLabel\` can be used to provide screen readers with context about the SearchField.

      Be sure to also specify (and localize) a string for the \`accessibilityClearButtonLabel\`.
      `}
        >
          <MainSection.Card
            cardSize="lg"
            sandpackExample={
              <SandpackExample
                name="Accessibility example"
                code={accessibilityExample}
                layout="column"
              />
            }
          />
        </MainSection.Subsection>
      </AccessibilitySection>

      <LocalizationSection
        name={generatedDocGen?.displayName}
        noDefaultLabelProvider
        notes={`Also localize \`value\` for those cases when it can be translated.`}
        code={localizationExample}
      />

      <MainSection name="Variants">
        <MainSection.Subsection
          title="Visible label"
          description={`When specified, \`label\` adds a label above the SearchField. If \`label\` is specified, \`accessibilityLabel\` can be an empty string.`}
        >
          <MainSection.Card
            cardSize="lg"
            sandpackExample={
              <SandpackExample name="Variants example" code={variantsExample} layout="column" />
            }
          />
        </MainSection.Subsection>

        <MainSection.Subsection
          title="Sizes"
          description={`There are 2 sizes available: \`md\` (default) and \`lg\`.`}
        >
          <MainSection.Card
            cardSize="lg"
            sandpackExample={
              <SandpackExample name="Sizes example" code={sizesExample} layout="column" />
            }
          />
        </MainSection.Subsection>

        <MainSection.Subsection
          title="Error"
          description={`An \`errorMessage\` can be specified if needed.`}
        >
          <MainSection.Card
            cardSize="lg"
            sandpackExample={
              <SandpackExample name="Error example" code={errorExample} layout="column" />
            }
          />
        </MainSection.Subsection>
      </MainSection>

      <QualityChecklist component={generatedDocGen?.displayName} />

      <MainSection name="Related">
        <MainSection.Subsection
          description={`
**[ComboBox](/web/combobox)**
ComboBox allows users to filter a list when selecting an option. Choose ComboBox when the user is selecting from a finite list of options.
**[TextField](/web/textfield)**
TextField provides an affordance to input small to medium length text. Unless the text is used to search for or filter through content, choose TextField for shorter text input.
**[TextArea](/web/textarea)**
TextArea allows for multiline text input, suitable for longer length text. Unless the text is used to search for or filter through content, choose TextArea for longer text input.
      `}
        />
      </MainSection>
    </Page>
  );
}

export async function getServerSideProps(): Promise<{
  props: { generatedDocGen: DocGen },
}> {
  return {
    props: { generatedDocGen: await docGen('SearchField') },
  };
}
