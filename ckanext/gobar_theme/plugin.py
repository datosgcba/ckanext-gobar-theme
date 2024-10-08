import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit
import ckan.views.user as u
import ckanext.gobar_theme.actions as gobar_actions
import ckanext.gobar_theme.routing as gobar_routes
import ckanext.gobar_theme.helpers as gobar_helpers
from flask import Blueprint

class Gobar_ThemePlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)
    plugins.implements(plugins.IActions)
    plugins.implements(plugins.IBlueprint)

    def get_actions(self):
        return {'package_activity_list_html': gobar_actions.package_activity_list_html,
                'group_delete': gobar_actions.group_delete_and_purge,
                'package_delete': gobar_actions.dataset_delete_and_purge,
                'resource_delete': gobar_actions.resource_delete_and_purge,
                'organization_delete': gobar_actions.organization_delete_and_purge
                }

    def before_map(self, routing_map):
        gobar_router = gobar_routes.GobArRouter(routing_map)
        gobar_router.set_routes()
        return routing_map

    def get_blueprint(self):
        blueprint = Blueprint('ingresar', self.__module__)
        rules = [
            ('/ingresar', 'login', u.login),
        ]
        for rule in rules:
            blueprint.add_url_rule(*rule)

        return blueprint



    def update_config(self, config):
        toolkit.add_template_directory(config, 'templates')
        toolkit.add_public_directory(config, 'public')
        toolkit.add_resource('assets/styles', 'gobar_css')
        toolkit.add_resource('assets/js', 'gobar_js')
        #toolkit.add_resource('recline', 'gobar_data_preview')



    def get_helpers(self):
        return {
            'organization_tree': gobar_helpers.organization_tree,
            'get_suborganizations': gobar_helpers.get_suborganizations,
            'get_faceted_groups': gobar_helpers.get_faceted_groups,
            'join_groups': gobar_helpers.join_groups,
            'cut_text': gobar_helpers.cut_text,
            'cut_img_path': gobar_helpers.cut_img_path,
            'organizations_with_packages': gobar_helpers.organizations_with_packages,
            'get_pkg_extra': gobar_helpers.get_pkg_extra,
            'get_facet_items_dict': gobar_helpers.get_facet_items_dict,
            'render_ar_datetime': gobar_helpers.render_ar_datetime,
            'url_join': gobar_helpers.url_join,
            'json_loads': gobar_helpers.json_loads,
            'update_frequencies': gobar_helpers.update_frequencies,
            'field_types': gobar_helpers.field_types,
            'valid_length': gobar_helpers.valid_length,
            'accepted_mime_types': gobar_helpers.accepted_mime_types,
            'type_is_numeric': gobar_helpers.type_is_numeric,
            'attributes_has_at_least_one': gobar_helpers.attributes_has_at_least_one,
            'get_site_statistics': gobar_helpers.get_site_statistics
        }
