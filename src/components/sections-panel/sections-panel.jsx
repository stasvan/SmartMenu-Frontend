import React, {Component} from 'react';
import {Tab , Tabs, TabList, TabPanel} from 'react-tabs';
import DishesList from '../dishes-list/dishes-list';
import './sections-panel.scss';

class SectionsPanel extends Component{

    render () {
        const { sections } = this.props;

        if (!sections) {
            return (<div></div>);
        }

        const tabs = [];
        const tabPanels = [];
        for (let section of sections) {
            tabs.push(
                <Tab className="section-tab">
                    {section.name}
                </Tab>
            )

            tabPanels.push(
                <TabPanel>
                    <DishesList dishesList={section.dishes}/>
                </TabPanel>
            )
        }

        return (
            <Tabs
                selectedTabClassName=""
                selectedTabPanelClassName=""
            >
                <TabList className="section-tabs">{tabs}</TabList>
                {tabPanels}
            </Tabs>
        )
    }
}

export default SectionsPanel;