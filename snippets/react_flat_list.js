const body = `

(
  <FlatList
      data={$data}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <>
          $2
        </>
      )}
    />
)
`;

const description = "react_flat_list";

module.exports = {
  prefix: ["!flatlist"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};
