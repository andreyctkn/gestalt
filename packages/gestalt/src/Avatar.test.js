// @flow strict
import { create } from 'react-test-renderer';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders multi-byte character initial', () => {
    const component = create(<Avatar name="💩 astral" />, {
      createNodeMock() {
        return { clientWidth: 100 };
      },
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with an empty name shows default icon', () => {
    const tree = create(<Avatar name="" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an outline', () => {
    const tree = create(<Avatar name="Jenny" outline />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the verified icon', () => {
    const tree = create(<Avatar name="Jammy" verified />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct src', () => {
    const tree = create(
      <Avatar name="Strava" src="http://pinterest.com/img/strave.png" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct size - xs', () => {
    const tree = create(
      <Avatar name="Strava" src="http://pinterest.com/img/strave.png" size="xs" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct size - sm', () => {
    const tree = create(
      <Avatar name="Strava" src="http://pinterest.com/img/strave.png" size="sm" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct size - md', () => {
    const tree = create(
      <Avatar name="Strava" src="http://pinterest.com/img/strave.png" size="md" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct size - lg', () => {
    const tree = create(
      <Avatar name="Strava" src="http://pinterest.com/img/strave.png" size="lg" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct size - xl', () => {
    const tree = create(
      <Avatar name="Strava" src="http://pinterest.com/img/strave.png" size="xs" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the checkmark on verified default', () => {
    const tree = create(
      <Avatar name="Strava" src="http://pinterest.com/img/strave.png" size="md" verified />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
