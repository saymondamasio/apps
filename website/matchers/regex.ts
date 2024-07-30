import { MatchContext } from "deco/blocks/matcher.ts";

/**
 * @title Pattern {{{regex}}}
 */
export interface Props {
  regex: string;
}

/**
 * @title Regex
 * @description Target users based on the regex pattern
 * @icon world-www
 */
const MatchRegex = (
  { regex }: Props,
  { request }: MatchContext,
) => {
  return new URLPattern({ pathname: regex }).test(request.url);
};

export default MatchRegex;
