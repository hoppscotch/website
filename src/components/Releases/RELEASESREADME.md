 <VersionBadge version="v1.0.0" date="November 8th 2023"/>

## <p class="font-semibold">Release Notes</p>

<p className="text-xl"> New Features Every New Release </p>

<Row>
    <TypeBadge type="improvement"/>
    <TypeBadge type="feature"/>
    <TypeBadge type="hotfix"/>
</Row>

<br/><br/>

## <p class="font-semibold">Introducing Hoppscotch Desktop App</p>

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
          <Row>
            <Added>
                <ListItem content="i18n support to admin dashboard."/>
                <ListItem content="Auto-complete recent history entries in URL bar."/>
                <ListItem content="Context menu."/>
              </Added>
              <Changed>
                <ListItem content="Revamped spotlight."/>
                <ListItem content="UX improvement for SmartTree."/>
                <ListItem content="Fonts are now bundled with packages."/>
              </Changed>
              <Removed>
                <ListItem content="Unnecessary dependencies from hoppscotch-ui."/>
                <ListItem content="Move crisp out of common."/>
              </Removed>
              <Fixed>
                <ListItem content="Shortcut keys for spotlight and shortcuts."/>
                <ListItem content="Firefox browser scrollbar issue."/>
                <ListItem content="Elastic overscroll on Safari."/>
              </Fixed>
              <Performance>
                <ListItem content="Bump dependencies."/>
                <ListItem content="Type and UX improvement for SmartTree."/>
              </Performance>
              <Others>
                <ListItem content="Updated font size and truncation on fields."/>
                <ListItem content="Improved command labels and icons."/>
            </Others>
          </Row>    
</Section>
