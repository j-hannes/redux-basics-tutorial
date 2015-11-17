export default function match(pattern, matching) {
  if (!('otherwise') in matching) {
    throw new Error('please specify "otherwise" pattern')
  }
  return pattern in matching ? matching[pattern]() : matching.otherwise();
}
