const body = `

(
  <SectionList
    flex={1}
    sections={data}
    keyExtractor={(item, index) => index}
    ItemSeparatorComponent={ItemSeparatorComponent}
    renderItem={renderItem || (({ item }) => <SectionItem item={item} onPress={item?.onPress} />)}
    renderSectionHeader={renderHeader || (({ section }) => <SectionHeader title={section.title} />)}
  />
)
`;

const description = "react native sectionlist";

module.exports = {
  prefix: ["!sectionlist"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};
