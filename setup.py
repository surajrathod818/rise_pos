from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in rise_pos/__init__.py
from rise_pos import __version__ as version

setup(
	name="rise_pos",
	version=version,
	description="Test APP",
	author="Suraj Rathod",
	author_email="surajrathod818@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
