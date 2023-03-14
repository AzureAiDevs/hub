import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  Day Not Yet Published
                </Translate>
              </h1>
              {/* <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  The days page is not published yet. Please check back later.
                </Translate>
              </p> */}
              <p>
                {/* <Translate
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the 404 page">
                  Refer to https://aka.ms/ai-april for more information.
                </Translate> */}
                <h2>
                <a href="/hub/roadmap/30days">Refer to the roadmap for #30DaysOfAzureAI</a>
                </h2>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
