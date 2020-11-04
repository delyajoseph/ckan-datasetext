import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit


class DatasetextPlugin(plugins.SingletonPlugin, toolkit.DefaultDatasetForm):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.IDatasetForm)
    # IConfigurer

    def update_config(self, config_):
        toolkit.add_template_directory(config_, 'templates')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('fanstatic','datasetext')
    
    def _modify_package_schema(self, schema):
       # schema.update({
       #     'pid': [toolkit.get_converter('convert_to_extras')]
       # })
        
        #schema.update({
        #    'doi': [toolkit.get_converter('convert_to_extras')]
        #})
        schema.update({
            'pm': [toolkit.get_converter('convert_to_extras')]
        })
        schema.update({
            'pl': [toolkit.get_converter('convert_to_extras')]
        })
        schema.update({
            'pmcntct': [toolkit.get_converter('convert_to_extras')]
        })
        schema.update({
            'plcntct': [toolkit.get_converter('convert_to_extras')]
        })
        schema.update({
            'pmemail': [toolkit.get_converter('convert_to_extras')]
        })
        schema.update({
            'plemail': [toolkit.get_converter('convert_to_extras')]
        })
        schema.update({
            'pmpo': [toolkit.get_converter('convert_to_extras')]
        })
        schema.update({
            'plpo': [toolkit.get_converter('convert_to_extras')]
        })
        schema.update({
            'abstract': [toolkit.get_converter('convert_to_extras')]
        })
        
        return schema


    def create_package_schema(self):
        schema = super(DatasetextPlugin, self).create_package_schema()
        schema = self._modify_package_schema(schema)
        return schema

    def update_package_schema(self):
        schema = super(DatasetextPlugin, self).update_package_schema()
        schema = self._modify_package_schema(schema)
        return schema

    def is_fallback(self):
        # Return True to register this plugin as the default handler for
        # package types not handled by any other IDatasetForm plugin.
        return True

    def package_types(self):
        # This plugin doesn't handle any special package types, it just
        # registers itself as the default (above).
        return []

    def show_package_schema(self):
        schema = super(DatasetextPlugin, self).show_package_schema()
        schema.update({
            'pm': [toolkit.get_converter('convert_from_extras'),
                            toolkit.get_validator('ignore_missing')]
        })
        schema.update({
            'pl': [toolkit.get_converter('convert_from_extras'),
                            toolkit.get_validator('ignore_missing')]
        })
        schema.update({
            'pmcntct': [toolkit.get_converter('convert_from_extras'),
                            toolkit.get_validator('ignore_missing')]
        })
        schema.update({
            'plcntct': [toolkit.get_converter('convert_from_extras'),
                            toolkit.get_validator('ignore_missing')]
        })
        schema.update({
            'pmemail': [toolkit.get_converter('convert_from_extras'),
                            toolkit.get_validator('ignore_missing')]
        })
        schema.update({
            'plemail': [toolkit.get_converter('convert_from_extras'),
                            toolkit.get_validator('ignore_missing')]
        })
        schema.update({
            'pmpo': [toolkit.get_converter('convert_from_extras'),
                            toolkit.get_validator('ignore_missing')]
        })
        schema.update({
            'plpo': [toolkit.get_converter('convert_from_extras'),
                            toolkit.get_validator('ignore_missing')]
        })
        schema.update({
            'abstract': [toolkit.get_converter('convert_from_extras'),
                            toolkit.get_validator('ignore_missing')]
        })
        #schema.update({
        #    'doi': [toolkit.get_converter('convert_from_extras'),
         #                   toolkit.get_validator('ignore_missing')]
        #})
        return schema

