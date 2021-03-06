/*
 * Copyright 2016 Anton Tananaev (anton.tananaev@gmail.com)
 * Copyright 2016 Andrey Kunitsyn (abyss@fox5.ru)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Ext.define('Traccar.model.ReportTrip', {
    extend: 'Ext.data.Model',
    identifier: 'negative',

    fields: [{
        name: 'deviceId',
        type: 'int'
    }, {
        name: 'deviceName',
        type: 'string'
    }, {
        name: 'maxSpeed',
        type: 'float'
    }, {
        name: 'averageSpeed',
        type: 'float'
    }, {
        name: 'distance',
        type: 'float'
    }, {
        name: 'duration',
        type: 'int'
    }, {
        name: 'startTime',
        type: 'date',
        dateFormat: 'c'
    }, {
        name: 'startAddress',
        type: 'string'
    }, {
        name: 'endTime',
        type: 'date',
        dateFormat: 'c'
    }, {
        name: 'endAddress',
        type: 'string'
    }]
});
