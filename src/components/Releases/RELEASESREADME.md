 <VersionBadge version="v1.0.0" date="November 8th 2023"/>

## <b>Release Notes</b>

<p className="text-xl"> New Features Every New Release </p>

<div className="flex flex-row gap-2 mt-2">
    <TypeBadge type="improvement"/>
    <TypeBadge type="feature"/>
    <TypeBadge type="hotfix"/>
</div>

<br/><br/>

## <b>Introducing Hoppscotch Desktop App</b>

<SectionContent>
        Hoppscotch Desktop App is a cross-platform desktop application built
        with Tauri and Hoppscotch Web Client. It is a standalone version of
        Hoppscotch that can be installed on your computer and used without a
        browser. Hoppscotch Desktop App is currently in alpha and is
        available for Mac, Windows and Linux.
</SectionContent>

<BannerImage imageSource="/images/changelog-08-11-2023.png"/>

<Section>
    <Fragment>
        <SectionTitle title=" Revamped spotlight" />
        <SectionContent>
                The Hoppscotch Desktop app has Spotlight is now more powerful and
                useful than ever. You can now search for any request, collection,
                environment, workspace, etc. from the spotlight. You can also use
                the spotlight to quickly navigate to any request, collection,
                environment, workspace, etc.
        </SectionContent>
    </Fragment>
</Section>

<Section>
    <SectionTitle title=" Regular Updations" />
      <Section>
          <Row>
            <Added>
              <li class="pl-4">i18n support to admin dashboard.</li>
              <li class="pl-4">
                Auto-complete recent history entries in URL bar.
              </li>
              <li class="pl-4">Context menu.</li>
            </Added>
            <Changed>
              <li class="pl-4">Revamped spotlight.</li>
              <li class="pl-4">UX improvement for SmartTree.</li>
              <li class="pl-4">Fonts are now bundled with packages.</li>
            </Changed>
            <Removed>
              <li class="pl-4">
                Unnecessary dependencies from hoppscotch-ui.
              </li>
              <li class="pl-4">Move crisp out of common.</li>
            </Removed>
            <Fixed>
              <li class="pl-4">Shortcut keys for spotlight and shortcuts.</li>
              <li class="pl-4">Firefox browser scrollbar issue.</li>
              <li class="pl-4">Elastic overscroll on Safari.</li>
            </Fixed>
            <Performance>
              <li class="pl-4">Bump dependencies.</li>
              <li class="pl-4">Type and UX improvement for SmartTree.</li>
            </Performance>
            <Others>
              <li class="pl-4">
                Updated font size and truncation on fields.
              </li>
              <li class="pl-4">Improved command labels and icons.</li>
            </Others>
          </Row>
        </Section>
</Section>
