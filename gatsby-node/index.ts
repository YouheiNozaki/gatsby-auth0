import path from "path"
import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({
  page,
  actions,
}) => {
  const { createPage } = actions

  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"

    createPage(page)
  }
}
